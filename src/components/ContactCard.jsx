import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import useDisclouse from "../hooks/useDisclouse";
import AddAndUpdateContact from './AddAndUpdateContect'
import { toast } from 'react-toastify';
function ContactCard({ contact }) {
  const { isOpen, onClose, onOpen } = useDisclouse();

  console.log(onOpen);

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact deleted succesfully")
    } catch (error) {}
  };
  return (
    <>
      <div className="bg-yellow flex justify-between rounded-lg mt-4 items-center">
        <div className="flex items-center gap-2 p-2">
          <HiOutlineUserCircle className="text-4xl text-orange" />
          <div className="">
            <h2 className="font-bold font-medium text-[#670303]">
              {contact.name.toUpperCase()}
            </h2>
            <p className="">{contact.phone}</p>
            <p className="">{contact.email}</p>
          </div>
        </div>
        <div className="flex text-3xl gap-1">
          <RiEditCircleLine onClick={onOpen} className="cursor-pointer" />
          <IoMdTrash
            onClick={() => deleteContact(contact.id)}
            className="cursor-pointer text-orange"
          />
        </div>
      </div>
      <AddAndUpdateContact
        contact={contact}
        isUpdate
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
}

export default ContactCard;
