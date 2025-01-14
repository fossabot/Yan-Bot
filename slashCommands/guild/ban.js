const PostCommand = require("../../base/PostGuildCommand");
const BasePostCommand = require("../../base/BasePostCommand");

module.exports = class PostBanCommand extends BasePostCommand {
  constructor() {
    super("ban");
  }
  async run(client) {
    //post ban command to the api
    const command = new PostCommand();
    const data = {
      name: "ban",
      description: "Ban a user",

      options: [
        {
          name: "user",
          description: "User to ban from this guild.",
          type: 6,
          required: true,
        },
      ],
    };
    command.post(client, data, client.config.guild_owner_id);
  }
};
