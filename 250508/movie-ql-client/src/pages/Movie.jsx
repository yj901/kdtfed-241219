import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(-45deg, #d754ab, #fd723a);
  color: var(--light);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemGroup = styled.div`
  width: 50vw;
  display: flex;
  gap: 10px;
`;

const Column = styled.div`
  flex: 1;
  text-align: center;
`;

const Loading = styled.div`
  width: 100%;
  font-size: 1.8rem;
  text-align: center;
  margin-top: 20vh;
`;

const Title = styled.h2`
  font-size: 5rem;
`;

const SubTitle = styled.div`
  font-size: 3rem;
  margin: 15px 0 20px;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  font-size: 1.6rem;
  padding: 6px 16px;
  cursor: pointer;
`;

const Description = styled.p`
  font-size: 2rem;
  line-height: 1.3;
`;

const Image = styled.div`
  width: 100%;
  height: 700px;
  flex: 1;
  background: url(${({ $bg }) => $bg}) top/cover no-repeat;
  border-radius: 8px;
`;

const GET_MOVIE = gql`
  query getMovie($movieId: String!) {
    movie(id: $movieId) {
      id
      title
      rating
      medium_cover_image
      isLiked @client
    }
  }
`;

const Movie = () => {
  const { id } = useParams();
  const {
    data,
    loading,
    client: { cache },
  } = useQuery(GET_MOVIE, {
    variables: {
      movieId: id,
    },
  });

  const onClick = () => {
    cache.writeFragment({
      id: `Movie:${id}`,
      fragment: gql`
        fragment MovieFragment on Movie {
          isLiked
        }
      `,
      data: {
        isLiked: !data.movie.isLiked,
      },
    });
  };

  return (
    <>
      {loading ? (
        <Loading>Loading...</Loading>
      ) : (
        <Container>
          <ItemGroup>
            <Column>
              <Title>{data?.movie?.title}</Title>
              <SubTitle>⭐{data?.movie?.rating}</SubTitle>
              <Button onClick={onClick}>
                {data?.movie?.isLiked ? "Like" : "unLike"}
              </Button>
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam dicta vel ipsa, debitis dolor voluptas praesentium
                quas molestias adipisci qui unde harum, illum cumque!
                Perferendis autem voluptas assumenda voluptates laudantium!
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam dicta vel ipsa, debitis dolor voluptas praesentium
                quas molestias adipisci qui unde harum, illum cumque!
              </Description>
            </Column>
            <Image $bg={data?.movie?.medium_cover_image} />
          </ItemGroup>
        </Container>
      )}
    </>
  );
};

export default Movie;
