import React from "react";
import Title from "../common/Title";
import Image from "next/image";

const AboutUs = () => {
  return (
    <React.Fragment>
      <div className="mx-[40px]">
        <Title title={"About Us"} />
        <div className="flex justify-between flex-wrap w-full">
          <div className="w-[50%] mt-6">
            <span className="text-[18px] leading-[30px]">
              {" "}
              Lorem ipsum dolor sit amet consectetur. Sagittis purus fames
              auctor augue scelerisque urna tincidunt suscipit eu. Quis vitae et
              odio pretium maecenas sed. Amet quisque orci dolor ac vestibulum.
              Fermentum malesuada sed in erat mauris turpis. Praesent
              pellentesque aliquet pulvinar tristique pellentesque feugiat
              augue. Ultricies libero mi aliquam lectus eu habitant at. Blandit
              malesuada massa vitae a venenatis in at. Lobortis in lectus sem
              molestie aliquam diam. Justo sollicitudin sed aliquet a tincidunt
              eu vitae. Sed eget sed mauris est iaculis eu. Non nunc vitae ac
              magna tincidunt morbi feugiat. Et ipsum purus donec massa sapien.
              In odio feugiat risus massa mauris faucibus. Lectus varius
              tristique lacinia eleifend ac luctus suspendisse ut
              pellentesque.Lobortis in lectus sem molestie aliquam diam. Justo
              sollicitudin sed aliquet a tincidunt eu vitae. Sed eget sed mauris
              est iaculis eu. Non nunc vitae ac magna tincidunt morbi feugiat.
              Et ipsum purus donec massa sapien. In odio feugiat risus massa
              mauris faucibus. Lectus varius tristique lacinia eleifend ac
              luctus suspendisse ut pellentesque.
            </span>
          </div>
          <div className="w-[40%] ml-16">
            <Image src={"/form.svg"} width={680} height={449} />
          </div>
        </div>
        <div className="my-10">
          <span className="text-[18px] leading-[30px]">
            {" "}
            Lorem ipsum dolor sit amet consectetur. Sagittis purus fames auctor
            augue scelerisque urna tincidunt suscipit eu. Quis vitae et odio
            pretium maecenas sed. Amet quisque orci dolor ac vestibulum.
            Fermentum malesuada sed in erat mauris turpis. Praesent pellentesque
            aliquet pulvinar tristique pellentesque feugiat augue. Ultricies
            libero mi aliquam lectus eu habitant at. Blandit malesuada massa
            vitae a venenatis in at. Lobortis in lectus sem molestie aliquam
            diam. Justo sollicitudin sed aliquet a tincidunt eu vitae. Sed eget
            sed mauris est iaculis eu. Non nunc vitae ac magna tincidunt morbi
            feugiat. Et ipsum purus donec massa sapien. In odio feugiat risus
            massa mauris faucibus. Lectus varius tristique lacinia eleifend ac
            luctus suspendisse ut pellentesque. <br/><br/>
            
            Lorem ipsum dolor sit amet
            consectetur. Sagittis purus fames auctor augue scelerisque urna
            tincidunt suscipit eu. Quis vitae et odio pretium maecenas sed. Amet
            quisque orci dolor ac vestibulum. Fermentum malesuada sed in erat
            mauris turpis. Praesent pellentesque aliquet pulvinar tristique
            pellentesque feugiat augue. Ultricies libero mi aliquam lectus eu
            habitant at. Blandit malesuada massa vitae a venenatis in at.
            Lobortis in lectus sem molestie aliquam diam. Justo sollicitudin sed
            aliquet a tincidunt eu vitae. Sed eget sed mauris est iaculis eu.
            Non nunc vitae ac magna tincidunt morbi feugiat. Et ipsum purus
            donec massa sapien. In odio feugiat risus massa mauris faucibus.
            Lectus varius tristique lacinia eleifend ac luctus suspendisse ut
            pellentesque. <br/><br/>
            
            Lorem ipsum dolor sit amet consectetur. Sagittis purus
            fames auctor augue scelerisque urna tincidunt suscipit eu. Quis
            vitae et odio pretium maecenas sed. Amet quisque orci dolor ac
            vestibulum. Fermentum malesuada sed in erat mauris turpis. Praesent
            pellentesque aliquet pulvinar tristique pellentesque feugiat augue.
            Ultricies libero mi aliquam lectus eu habitant at. Blandit malesuada
            massa vitae a venenatis in at. Lobortis in lectus sem molestie
            aliquam diam. Justo sollicitudin sed aliquet a tincidunt eu vitae.
            Sed eget sed mauris est iaculis eu. Non nunc vitae ac magna
            tincidunt morbi feugiat. Et ipsum purus donec massa sapien. In odio
            feugiat risus massa mauris faucibus. Lectus varius tristique lacinia
            eleifend ac luctus suspendisse ut pellentesque.
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
