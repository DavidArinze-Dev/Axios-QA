import axios from "axios";
import { expect } from "chai";
import { faker } from "@faker-js/faker";
import PropertiesReader from "properties-reader";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const fs = require("fs");
const postResData = require("../response_data/post_response_data.json");
const requestBody = require("../response_data/request.json");
var properties = PropertiesReader("config/env.properties");

describe("Get API Request Tests", async () => {
  it("Should be able to get user list", async () => {
    // const res = await axios.get("https://reqres.in/api/users?page=2");
    const res = await axios.get(properties.get("baseUrl") + "/users?page=2");
    // const res = await axios.get(`${properties.get("baseUrl")}/users?page=2`);
    // console.log(res.data);
    expect(res.data.page).equal(2);
    expect(res.data.per_page).equal(6);
  });

  it("Should be able to write data to Json File", async () => {
    const randomName = faker.person.firstName();
    const randomJobTitle = faker.person.jobTitle();
    // const res = await axios.post("https://reqres.in/api/users", requestBody);
    const res = await axios.post(`${properties.get("baseUrl")}/users`, requestBody);
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
