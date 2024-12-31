import React from 'react'
import { Card, CardContent, CardFooter } from '../ui/card'
import { Label } from '../ui/label'
import { Button } from '../ui/button'

function AddressCard({ addressInfo, handleDeleteAddress, handleEditAddress, setCurrentSelectedAddress, selectedId }) {
    return (
        <Card onClick={
            setCurrentSelectedAddress
                ? () => { setCurrentSelectedAddress(addressInfo) }
                : null
        }
        className={`cursor-pointer ${selectedId?._id === addressInfo?._id ? 'border-red-900 border-[4px]' : 'border-black'}`}
        >
            <CardContent className={`${selectedId === addressInfo?._id ? 'border-black': ''} grid gap-4 p-4`}>
                <Label>Address: {addressInfo?.address}</Label>
                <Label>City: {addressInfo?.city}</Label>
                <Label>pincode: {addressInfo?.pincode}</Label>
                <Label>Phone: {addressInfo?.phone}</Label>
                <Label>Notes: {addressInfo?.notes}</Label>
            </CardContent>
            <CardFooter className=" p-3 flex justify-between">
                <Button onClick={() => handleEditAddress(addressInfo)}>
                    Edit
                </Button>
                <Button onClick={() => handleDeleteAddress(addressInfo)}>
                    Delete
                </Button>
            </CardFooter>
        </Card>
    )
}

export default AddressCard