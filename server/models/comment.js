'use strict';
export default (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    articleId: {
      type:DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: 'Enter article ID'
      },
      references: {
        model: 'Article',
        key: 'id',
        as: 'article_id',
      }
    },
    author: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter an author'
      }
    },
    approved: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: {
        args: false,
        msg: 'Approved must be a boolean'
      }
    },
    like_count: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: {
        args: false,
        msg: 'Like count cannot be null'
      }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: {
        args: false,
        msg: 'Please enter a comment'
      }
    }
  }, {});
  Comment.associate = (models) => {
    // associations can be defined here
    Comment.belongsTo(models.Article, {
      foreignKey: 'articleId',
      onDelete: 'CASCADE'
    });
  };
  return Comment;
};