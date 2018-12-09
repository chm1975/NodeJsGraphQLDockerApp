var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLBoolean = require('graphql').GraphQLBoolean;
var autoType = require('../types/autoType');
var autoModel = require('../../models/auto');


exports.add = {
  type: autoType.autoType,
  args: {
    modelo: {
      type: new GraphQLNonNull(GraphQLString),
    },
    tipo: {
      type: new GraphQLNonNull(GraphQLString),
    },
    patente: {
      type: new GraphQLNonNull(GraphQLString),
    },
    color: {
      type: new GraphQLNonNull(GraphQLString),
    }
  },
  resolve: async(root, args)=> {
    const uModel = new autoModel(args);
    const newAuto = await uModel.save();
    if (!newAuto) {
      throw new Error('error');
    }
    return newAuto
  }
};
