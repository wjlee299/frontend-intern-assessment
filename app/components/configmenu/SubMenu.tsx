import MenuTemplate from "./MenuTemplate"

interface SubMenuProps {
    subMenuTitle: string
}

const SubMenu: React.FC<SubMenuProps> = ({subMenuTitle}) => {
  return (
    <MenuTemplate menuTitle={subMenuTitle}></MenuTemplate>
  )
}

export default SubMenu