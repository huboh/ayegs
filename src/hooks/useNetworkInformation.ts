import { useContext } from "react";
import { NetworkInformationContext } from "../providers/NetworkInformationProvider";

const useNetworkInformation = () => useContext(NetworkInformationContext);

export default useNetworkInformation;