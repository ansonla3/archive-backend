import lodash from 'lodash/collection';
import knex from "knex";

const db = knex({
    client: "pg",
    connection: "postgres://anson@localhost:5432/polkadot-archive"
  });

const resolvers = {
    // Blocks: {
    //     getUser: (_, { id }) => {
    //         return lodash.find(users, { id });
    //     }
    // }
    Query: {
        numOfBlocks: async (parent, args, context) => {
            const model = db.table('blocks');
            const numOfBlocks = await model.count();
            return  numOfBlocks[0].count;
        },

        blocks: async (parent, args, context) => {
            const blocks = await db
                .select("*")
                .from("blocks")
                .limit(500);

            const parseBlocks = [];

            blocks.forEach(block => {
                parseBlocks.push({
                    'id': block.id,
                    'parent_hash': Buffer.from(block.parent_hash).toString('hex'),
                    'hash': Buffer.from(block.hash).toString('hex'),
                    'block_num': block.block_num,
                    'state_root': Buffer.from(block.state_root).toString('hex'),
                    'extrinsics_root': Buffer.from(block.extrinsics_root).toString('hex'),
                    'digest': Buffer.from(block.digest).toString('hex'),
                    'ext': Buffer.from(block.ext).toString('hex'),
                    'spec': block.spec,
                });
            });
            return parseBlocks;
        }



    }
};

export default resolvers;