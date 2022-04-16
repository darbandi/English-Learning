import React, { useEffect, useMemo, useState } from "react";
import {
  Button,
  Card,
  Flex,
  Input,
  Label,
  Main,
  Span,
  Wrapper,
} from "./components";
import { _data } from "./data";

function App() {
  const data = useMemo(() => _data, []);
  const [randomData, setRandomData] = useState();
  const [word, setWord] = useState();
  const [successCount, setSuccessCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [wrongList, setWrongList] = useState([]);
  const [visibleWrongs, setVisibleWrongs] = useState(false);
  const [counter, setCounter] = useState(
    parseInt(localStorage.getItem("lastNumber")) - 1 || 0
  );
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectedItem, setSelectedItem] = useState();
  const [visibleMin, setVisibleMin] = useState(false);

  const wordsCount = data.length;

  const getRandomNumber = (...nums) => {
    const num = Math.floor(Math.random() * wordsCount);
    if (nums?.includes(num)) {
      return getRandomNumber(num, ...nums);
    } else {
      return num;
    }
  };

  const getArrayData = (_replaceNumber) => {
    const randNumber1 = getRandomNumber();
    const randNumber2 = getRandomNumber(randNumber1);
    const randNumber3 = getRandomNumber(randNumber1, randNumber2);
    const randNumber4 = getRandomNumber(randNumber1, randNumber2, randNumber3);

    const replaceNumber = _replaceNumber
      ? _replaceNumber
      : Math.floor(Math.random() * 4);

    const _randomData = [
      data[randNumber1],
      data[randNumber2],
      data[randNumber3],
      data[randNumber4],
    ];

    const _word = data[counter];

    if (_randomData[replaceNumber].id === _word.id) {
      const _replaceNumber = Math.floor(Math.random() * 4);
      return getArrayData(_replaceNumber);
    } else {
      _randomData[replaceNumber] = _word;
      return { _randomData, _word };
    }
  };

  const next = () => {
    if (counter >= wordsCount) {
      return;
    }
    const { _randomData, _word } = getArrayData();

    setCounter((x) => x + 1);
    setRandomData(_randomData);
    setWord(_word);
  };

  const selectItem = (_id) => {
    if (counter >= wordsCount) return;
    setSelectedItem(_id);
    if (_id === word.id) {
      setSuccess(true);
      setSuccessCount((x) => x + 1);
    } else {
      setWrongList((x) => [...x, word]);
      setError(true);
      setWrongCount((x) => x + 1);
    }
    setTimeout(() => {
      setError(false);
      setSuccess(false);
      next();
    }, 200);
  };

  useEffect(() => {
    next();
  }, []);

  return (
    <Wrapper>
      <Label color="#199DA3" size={24}>
        {counter}: {word?.name}
      </Label>
      {visibleMin && (
        <Label color="#199DA3" size={18}>
          {word?.min}
        </Label>
      )}
      <Flex>
        <Label color="green" size={14}>
          True:{successCount}
        </Label>
        <Label color="red" size={14}>
          False:{wrongCount}
        </Label>
      </Flex>
      <Main>
        {randomData?.map(({ id, address, min }, index) => (
          <Card
            color={
              selectedItem === id
                ? success
                  ? "green"
                  : error
                  ? "red"
                  : ""
                : ""
            }
            onClick={() => selectItem(id)}
            key={"image_" + index}
            image={address}
          >
            {!address && <Label>{min}</Label>}
          </Card>
        ))}
      </Main>
      <Button
        variant="text"
        onClick={() => localStorage.setItem("lastNumber", counter)}
      >
        Save
      </Button>
      <Button
        variant="text"
        onClick={() => {
          localStorage.setItem("lastNumber", 1);
          window.location.reload();
        }}
      >
        Reset
      </Button>

      <Button onClick={() => setVisibleWrongs((x) => !x)} variant="text">
        <Span color={visibleWrongs ? "#333" : "silver"}>Wrongs</Span>
      </Button>
      <Button variant="text" onClick={() => setVisibleMin((x) => !x)}>
        <Span color={visibleMin ? "#333" : "silver"}>Meaning</Span>
      </Button>
      <Input
        placeholder="Number of word"
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            localStorage.setItem("lastNumber", parseInt(e.target.value));
            window.location.reload();
          }
        }}
      />
      <Button style={{ height: 40, width: 80 }} onClick={next}>
        Next
      </Button>
      <div>
        {visibleWrongs &&
          wrongList?.map((item) => {
            return (
              <React.Fragment key={"wrong_" + item?.id}>
                <Flex
                  between
                  style={{
                    borderBottom: "1px solid silver",
                  }}
                >
                  <Span>{item?.name}</Span> <Span>{item?.min}</Span>
                </Flex>
              </React.Fragment>
            );
          })}
      </div>
    </Wrapper>
  );
}

export default App;
