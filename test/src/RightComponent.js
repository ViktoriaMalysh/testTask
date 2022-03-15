import { Item, Icon } from "semantic-ui-react";

function RightComponent() {
  return (
    <div>
      <h1 className="h-title">Main Title</h1>
      <p className="p-title">
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipisci elit. Impedit
        exobcaecati natus eligendi delectus, cum deleniti sunt in labore nihil
        quod quibusdam expedita nemo.{" "}
      </p>

      <Item.Group relaxed="very">
        <Item>
          <Item.Image size="mini">
            <Icon
              className="icon_block"
              size="big"
              bordered
              color="blue"
              inverted
              name="envelope outline"
            />
          </Item.Image>
          <Item.Content>
            <Item.Header>
              <span className="span-header">A Subtitle Here</span>
            </Item.Header>
            <Item.Description>
              <span className="span-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perforendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </span>
            </Item.Description>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image size="mini">
            <Icon
              className="icon_block"
              size="big"
              bordered
              color="blue"
              inverted
              name="envelope outline"
            />
          </Item.Image>
          <Item.Content>
            <Item.Header className="vika">
              <span className="span-header">Title three</span>
            </Item.Header>
            <Item.Description>
              <span className="span-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perforendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </span>
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    </div>
  );
}

export default RightComponent;
