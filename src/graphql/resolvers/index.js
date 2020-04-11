import {mergeResolvers} from 'merge-graphql-schemas';
import Game from './Game';
import User from './User';

const resolvers = [Game, User];

export default mergeResolvers(resolvers);