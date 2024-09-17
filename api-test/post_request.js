import axios from "axios";
import { expect } from "chai";
import { faker } from "@faker-js/faker";

describe("POST API Request Test", async () => {
  it("Should be able to post user list", async () => {
    const randomName = faker.person.firstName()
    const randomJobTitle = faker.person.jobTitle()
    const res = await axios.post("https://reqres.in/api/users", {
      name: randomName,
      job: randomJobTitle,
    });
    console.log(res.data);
    expect(res.data.name).equal(randomName);
    expect(res.data.job).equal(randomJobTitle);
  });
});
