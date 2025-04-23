import styled from "styled-components";
import { usePostQuery } from "../usePost";

const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const ReactQuery = () => {
  // const { data, isLoading, error, isError, refetch } = useQuery({
  //   queryKey: ["posts", 1],
  //   queryFn: (querydata) => {
  //     const id = querydata.queryKey[1];
  //     return axios.get(`http://localhost:3000/posts/${id}`);
  //   },
  //   retry: 1,
  //   select: (data) => {
  //     return data.data;
  //   },
  //   gcTime: 20000,
  //   staleTime: 10000,
  //   // enabled: false,
  //   // refetchInterval: 3000,
  //   // refetchOnMount: false,
  //   // refetchOnWindowFocus: true,
  // });

  const { data, isLoading, error, isError, refetch } = usePostQuery();

  console.log(isLoading, data, error, isError);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <Container>
      {data?.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
      <button onClick={refetch}>Posts 리스트 새로고침</button>
    </Container>
  );
};

export default ReactQuery;
