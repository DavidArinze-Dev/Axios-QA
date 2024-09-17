import axios from "axios";
import { expect } from "chai";
import { faker } from "@faker-js/faker";

describe("Delete API Request Test", async () => {
  it("Should be able to delete a user", async () => {
    const randomName = faker.person.firstName();
    const randomJobTitle = faker.person.jobTitle();
    const res = await axios.delete("https://reqres.in/api/users/2");
    console.log(res.data);
    expect(res.status).equal(204);
  });
});
