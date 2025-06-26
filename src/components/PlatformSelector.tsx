import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import findPlatform from "../hooks/findPlatform";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: number) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const { data, isLoading, error } = usePlatforms();

  if (error) return null;
  if (isLoading) return <Spinner />;

  const selectedPlatform = findPlatform(selectedPlatformId);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data?.results.map(platform => <MenuItem onClick={() => onSelectPlatform(platform.id)} key={platform.id}>{platform.name}</MenuItem>)}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
