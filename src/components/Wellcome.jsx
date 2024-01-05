import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

export default function Wellcome() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex flex-wrap gap-4">
      <Button variant="light" className="text-zinc-100" onPress={onOpen}>
        <p>REGISTRADO</p>
        <FontAwesomeIcon
          icon={faSquareCheck}
          className="h-6  w-6 cursor-pointer  text-amber-600 animate-pulse"
        />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                ENHORABUENA
              </ModalHeader>
              <ModalBody>
                <h2>
                  Ya eres amigo/a del Museo. Puedes disfrutar de contenido
                  exclusivo y descuentos en entradas.
                </h2>
              </ModalBody>
              <ModalFooter>
                <Button color="warning" variant="solid" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
