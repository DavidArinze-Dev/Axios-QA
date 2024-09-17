import axios from "axios";
import { expect } from "chai";
import { faker } from "@faker-js/faker";

describe("PUT API Request Test", async () => {
  it("Should be able to update user list", async () => {
    const randomName = faker.person.firstName();
    const randomJobTitle = faker.person.jobTitle();
    const res = await axios.post("https://reqres.in/api/users/2", {
      name: "morpheus",
      job: randomJobTitle,
    });
    console.log(res.data);
    expect(res.data.name).equal("morpheus");
    expect(res.data.job).equal(randomJobTitle);
  });
});
