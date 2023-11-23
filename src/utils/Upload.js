/* eslint-disable no-undef */

const { DynamoDB } = require("@aws-sdk/client-dynamodb");

const { Upload } = require("@aws-sdk/lib-storage");

const { S3 } = require("@aws-sdk/client-s3");

const endpoint = new DynamoDB(process.env.ENDPOINT_BACKBLAZE);
const s3 = new S3({
  endpoint: process.env.ENDPOINT_BACKBLAZE,
  region: "us-east-5",
  credentials: {
    accessKeyId: process.env.KEY_ID,
    secretAccessKey: process.env.APP_KEY,
  },
});

const uploadImage = async (produto_imagem, id) => {
  const { originalname, mimetype, buffer } = produto_imagem;

  const imagem = await new Upload({
    client: s3,

    params: {
      Bucket: process.env.BUCKET_NAME,
      Key: `${id}/${originalname}`,
      Body: buffer,
      ContentType: mimetype,
    },
  }).done();

  return {
    path: imagem.Key,
    url: imagem.Location,
  };
};

const excluirImagem = async (url) => {
  const path = url.replace(
    /^https:\/\/desafio-grupo12\.s3\.us-west-004\.backblazeb2\.com\//,
    "",
  );
  await s3.deleteObject({
    Bucket: process.env.BUCKET_NAME,
    Key: path,
  });
};

module.exports = { uploadImage, excluirImagem };
