import fetch from 'node-fetch';

interface Types {
  kind: string;
  name: string;
  possibleTypes: {
    name: string;
  };
}

export const generateFragment = async (API: string) => {
  const result = await fetch(`${API}/graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      variables: {},
      query: `
        {
          __schema {
            types {
              kind
              name
              possibleTypes {
                name
              }
            }
          }
        }
      `,
    }),
  });

  const json = await result.json();
  const filteredData = json.data.__schema.types.filter((type: Types) => type.possibleTypes !== null);
  json.data.__schema.types = filteredData;
  return json.data;
};
