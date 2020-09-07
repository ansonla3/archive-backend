import { gql } from 'apollo-server-micro';

const typeDefs = gql`
    type Query {
        blocks: [Blocks]
        numOfBlocks: Int
    }

    type Blocks {
        id: Int!
        parent_hash: String
        hash: String
        block_num: Int
        state_root: String
        extrinsics_root: String
        digest: String
        ext: String
        spec: Int
    }
`;

export default typeDefs;