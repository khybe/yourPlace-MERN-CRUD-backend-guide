const {
  S3Client,
  HeadObjectCommand,
  DeleteObjectCommand,
} = require("@aws-sdk/client-s3");

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const fileDelete = async (imagePath) => {
  const filename = imagePath.split("/").pop();
  const params = { Bucket: process.env.AWS_BUCKET_NAME, Key: filename };

  try {
    await s3.send(new HeadObjectCommand(params));
    console.log("File Found in S3");
    await s3.send(new DeleteObjectCommand(params));
    console.log("file deleted Successfully");
  } catch (err) {
    console.log(`File not Found ERROR : ${err.code}`);
  }
};

module.exports = fileDelete;
