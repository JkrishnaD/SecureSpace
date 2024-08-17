"use client";

import { generateMnemonic } from "bip39";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { RiAiGenerate, RiDeleteBin2Line } from "react-icons/ri";
import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const MnemonicGeneration = () => {
  const [mnemonic, setMnemonic] = useState("");
  const [words, setWords] = useState<string[]>([]);
  const [dropDown, setDropDown] = useState(false);

  useEffect(() => {
    const createdMnemonic = localStorage.getItem("mnemonic");
    if (createdMnemonic) {
      setMnemonic(createdMnemonic);
      setWords(createdMnemonic.split(" "));
    }
  }, []);

  const onClick = () => {
    const mn = generateMnemonic();
    setMnemonic(mn);
    localStorage.setItem("mnemonic", mn);
    setWords(mn.split(" "));
    setDropDown(true);
  };

  const toggleDropDown = () => {
    setDropDown(!dropDown);
  };

  const clearMnemonic = () => {
    setMnemonic("");
    setWords([]);
    localStorage.removeItem("mnemonic");
    setDropDown(false);
  };

  return (
    <motion.div
      className="flex justify-center items-center flex-col"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-center items-center flex-col">
        <Card>
          <CardBody className="flex flex-row">
            <Button
              onClick={onClick}
              variant="solid"
              color="primary"
              className="bg-white hover:bg-black hover:text-white text-black flex p-3 transition-all ease-in-out delay-75 "
              radius="lg"
            >
              <RiAiGenerate /> Generate Mnemonic
            </Button>
          </CardBody>
        </Card>
        <Card>
          {mnemonic && (
            <CardHeader className="p-3 lg:w-[600px] flex justify-center">
              <Button
                className="cursor-pointer hover:underline"
                onClick={toggleDropDown}
              >
                Show Mnemonic preview
              </Button>
            </CardHeader>
          )}
          {dropDown && (
            <motion.div
              className="z-10 bg-white border rounded-md mt-2 w-full"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CardBody className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                {words.map((word, index) => (
                  <motion.span
                    key={index}
                    className="p-2 bg-black rounded-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    exit={{ opacity: 0, y: 20 }}
                  >
                    {index + 1}. {word}
                  </motion.span>
                ))}
                <motion.button
                  onClick={clearMnemonic}
                  className="col-span-full flex justify-center mt-2"
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 1.9 }}
                >
                  <RiDeleteBin2Line color="red" />
                </motion.button>
              </CardBody>
            </motion.div>
          )}
        </Card>
      </div>
    </motion.div>
  );
};
