import {navigationRef} from "./Navigation";

export const navigationpush =(screenName) =>{
  if(navigationRef.isReady()){
    navigationRef.navigate(screenName)
  }
};

