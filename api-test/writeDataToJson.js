import axios from "axios";
import { expect } from "chai";
import { faker } from "@faker-js/faker";
// import fs from ("fs")
// import postResData from "../response_data/post_response_data.json" assert { type: "json" };
// const postResData = require("../response_data/post_response_data.json");
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const fs = require("fs");
const postResData = require("../response_data/post_response_data.json");
const requestBody = require("../response_data/request.json");

describe("Write Data to Json File Test", async () => {
  it("Should be able to write data to Json File", async () => {
    const randomName = faker.person.firstName();
    const randomJobTitle = faker.person.jobTitle();
    const res = await axios.post("https://reqres.in/api/users", requestBody);
    console.log(res.data);
    expect(res.data.name).equal(requestBody.name);
    expect(res.data.job).equal(requestBody.job);

    postResData.name = res.data.name;
    postResData.job = res.data.job;
    postResData.id = res.data.id;
    postResData.createdAt = res.data.createdAt;

    fs.writeFileSync(
      "./response_data/post_response_data.json",
      JSON.stringify(postResData)
    );
  });
});
