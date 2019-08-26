'use strict';
export default (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    title: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please create article title'
      }
    },
    author: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter author name'
      }
    },
    type: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter article type'
      }
    },
    comment_count: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: {
        args: false,
        msg: 'Comment count cannot be null'
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
        msg: 'Please write an article'
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please specify and article topic'
      }
    }
  }, {});
  Article.associate = (models) => {
    // associations can be defined here
    Article.hasMany(models.Comment, {
      foreignKey: 'articleId',
    });
  };
  return Article;
};