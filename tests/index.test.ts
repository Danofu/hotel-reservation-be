import "reflect-metadata";
import { DataSource, createConnection, getConnection } from "typeorm";
import * as assert from "assert";
import { User } from "../src/entity/user";
import { AppDataSource } from "../src/data-source";

describe("The User", function () {
  beforeAll(async function () {
    await createConnection('connectionHotel')
  });
  afterAll( async function () {
    await getConnection('connectionHotel').close()
  })

  it("should be able to add a user", async function () {
    let user = new User();
    user.first_name = "Andy";
    user.last_name = "Burger";
    user.email = "Andy@Burger.com";
    user.access_token = "Burger";
    user.password = "Burger";
    await User.save({
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      access_token: user.access_token,
      password: user.password
    });
    let users = await User.find({where: {email: user.email}});
    assert.equal(1, users.length);
  });

  it('should be able to find users', async function(){
      let users = await User.find({})
      assert.ok(users.length > 1);
  })
});
