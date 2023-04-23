import Queue from "bull";
import axios from "axios";

const queue = new Queue("services", {
  redis: { port: 6378, host: "localhost" },
});

const addToQueue = async (data: any) => {
  await queue.add(data);
};

queue.process(function (job) {
  const url = job?.data?.service?.concat("/event");
  axios
    .post(url, job.data.payload)
    .then(() => {
      console.log("sent");
    })
    .catch((err) => {
      console.log("err", err.message, url);
    });
});

export default addToQueue;
