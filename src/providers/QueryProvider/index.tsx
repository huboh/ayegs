import { FC } from 'react';
import { QueryClientProvider, QueryClient } from "react-query";

export const queryClient = new QueryClient();

const QueryProvider: FC<{}> = ({ children }) => {
  return (
    <QueryClientProvider client={ queryClient }>
      { children }
    </QueryClientProvider>
  );
};

export default QueryProvider;