import { ApolloServer, gql } from "apollo-server";

//GET /allTweets => 지금까지의 전체 총 트윗자료를 가져와!
//GET /tweet/8
//GET /ping => 문자열의 값을 반환! (*반드시)

const tweets = [
  {
    id: "1",
    text: "First",
    userId: "2",
  },
  {
    id: "2",
    text: "Second",
    userId: "1",
  },
];

let users = [
  {
    id: "1",
    firstName: "Jin",
    lastName: "Back",
  },
  {
    id: "2",
    firstName: "Den",
    lastName: "Front",
  },
];

const resolvers = {
  Query: {
    allUsers() {
      return users;
    },
    allTweets() {
      return tweets;
    },
    tweet(root, { id }) {
      return tweets.find((tweet) => tweet.id === id);
    },
  },
  Mutation: {
    postTweet(root, { text, userId }) {
      const newTweet = {
        id: tweets.length + 1,
        text,
      };
      tweets.push(newTweet);
      return newTweet;
    },
    deleteTweet(root, { id }) {
      const tweet = tweets.find((tweet) => tweet.id === id);
      if (!tweet) return false;
      tweets = tweets.filter((tweet) => tweet.id !== id);
      return true;
    },
  },
  User: {
    fullName({ firstName, lastName }) {
      return `${firstName} ${lastName}`;
    },
  },
  Tweet: {
    author({ userId }) {
      return users.find((user) => user.id === userId);
    },
  },
};

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    firstName: String!
    lastName: String!
    """
    Is the sum of firstName + lastName as a String
    """
    fullName: String!
  }
  """
  Tweet Object represents a resource for a Tweet
  """
  type Tweet {
    id: ID!
    text: String!
    author: User
  }
  type Query {
    allUsers: [User!]!
    allTweets: [Tweet!]!
    tweet(id: ID!): Tweet
  }
  type Mutation {
    postTweet(text: String, userId: ID): Tweet
    """
    Delete a Tweet if found, else returns false
    """
    deleteTweet(id: ID): Boolean
  }
`;

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
