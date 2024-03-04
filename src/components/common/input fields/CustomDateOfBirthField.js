import React, { useState } from "react";
import { TextInput, View, TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const CustomDateOfBirthField = ({ onDateSelected }) => {
  const [isPickerOpen, setPickerOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const showDatePicker = () => {
    setPickerOpen(true);
  };

  const hideDatePicker = () => {
    setPickerOpen(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
    onDateSelected(date);
  };

  return (
    <View>
      <TouchableOpacity onPress={showDatePicker}>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          editable={false}
          value={selectedDate ? selectedDate.toDateString() : ""}
          placeholder="Select Date of Birth"
        />
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isPickerOpen}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default CustomDateOfBirthField;
