import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const Searchcom = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={{
        position:"absolute",
      }}
    />
  );
};

export default Searchcom;