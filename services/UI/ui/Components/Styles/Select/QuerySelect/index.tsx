// UI/ui/Components/Styles/Select/QuerySelect/index.tsx
import React, { FunctionComponent, PropsWithChildren } from 'react'
import { BaseSelect, BaseSelectProps, SelectItem } from 'ui/Components/Styles/Select/BaseSelect';
import { DocumentNode } from 'graphql';
import { useQuery } from '@apollo/react-hooks';

interface QuerySelectProps extends Omit<BaseSelectProps, 'items'> {
  query: DocumentNode;
}

export type QuerySelectType = FunctionComponent<QuerySelectProps>

interface DataQuery {
  name: string;
  id: string;
}

/**
 *  * Must make sure your query is aliased to be  
 * ```graphql
 *  {
 *     getXYZ {
 *       name
 *       id
 *     }
 *  }
 * ```
 */
export const QuerySelect: QuerySelectType = ({ query, ...props }) => {
  const { data, loading } = useQuery<{ [query: string]: DataQuery[] }>(query)
  let options: SelectItem[] = [];
  if (!data && !loading) return <div>TODO ERROR</div>
  if (!data) options.push({ label: 'Loading', value: '0' });
  if (data) {
    Object.keys(data).map((key, index) => {
      data[key].map(({ name, id }) => {
        options.push({ label: name, value: id });
      });
    });
  }

  /// 
  return (
    <BaseSelect 
      {...props} 
      items={options} 
    />

  )

}