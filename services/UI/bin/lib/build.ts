import { generateFragment } from './ApolloFragment';
import { copy, mkdir, remove, writeJSON } from 'fs-extra';
import ParcelBundler from 'parcel-bundler';
import { entryPointHandler, CSS } from './CSSManifest';
import { buildManifest } from './buildManifest';

export async function build(watch: boolean = false) {
  await remove('dist');
  await mkdir('dist');

  await copy('public', 'dist/public');

  await copy('package.json', 'dist/package.json');
  await copy('package-lock.json', 'dist/package-lock.json');

  const fragmentJSON = await generateFragment('https://projects.kristianjones.dev');
  await writeJSON('ui/fragmentTypes.json', fragmentJSON);

  const bundler = new ParcelBundler('ui/client.urls', {
    outDir: 'dist/public',
    watch,
    target: 'browser',
    contentHash: true,
    sourceMaps: false,
    cache: false,
  });

  bundler.on('bundled', bundle =>
    // @ts-ignore
    bundler.options.entryFiles.length > 1 ? bundle.childBundles.forEach(entryPointHandler) : entryPointHandler(bundle),
  );

  await bundler.bundle();

  process.env['BABEL_ENV'] = 'server';
  const serverbundler = new ParcelBundler(['server/index.ts', 'server/server.urls'], {
    outDir: 'dist/server',
    watch,
    target: 'node',
    contentHash: true,
    sourceMaps: false,
    cache: false,
  });

  serverbundler.on('bundled', bundle =>
    // @ts-ignore
    bundler.options.entryFiles.length > 1 ? bundle.childBundles.forEach(entryPointHandler) : entryPointHandler(bundle),
  );
  await serverbundler.bundle();
  await writeJSON('dist/CSS.json', CSS);
}
