import {mergeTypes} from "merge-graphql-schemas";
import Game from './Game';
import User from './User';

const typeDefs = [Game, User];

export default mergeTypes(typeDefs, {all: true});