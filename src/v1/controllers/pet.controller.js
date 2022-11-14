"use strict";

import petmoonNft from "../../smartcontract/petmoon-nft.js";
import petname from "../../utils/petname.js";

const petController = {
  getPet: async (req, res) => {
    try {
      const dataPet = await petmoonNft.methods
        .Petmoondata(req.params.id)
        .call();

      const obj = {
        id: dataPet.id,
        name: `#${dataPet.id} ${petname[dataPet.picture]}`, // change this item
        video: `https://petmoon.net/data/video/${dataPet.picture}.mp4`,
        image: `https://petmoon.net/data/image/${dataPet.picture}.png`,
        attributes: [
          {
            trait_type: "Rarity",
            value: dataPet.special,
            desc: dataPet.special == 0 ? "Normal" : "Rare",
          },
          {
            trait_type: "Level",
            value: dataPet.level,
          },
          {
            trait_type: "interest",
            value: dataPet.interest,
          },
        ],
      };

      return res.status(200).json(obj);
    } catch (error) {
      res.status(500).json("error : " + error);
    }
  },
};

export default petController;
