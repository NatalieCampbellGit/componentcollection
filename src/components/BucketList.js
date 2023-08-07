import React, { useState } from 'react';
import BucketForm from './BucketForm';
import Bucket from './Bucket';

function BucketList() {
  const [bucket, setBucket] = useState([]);

  // Function to add a bucket list item
  const addBucketItem = (item) => {
    // Check to see if the item text is empty
    if (!item.text.trim()) {
      return;
    }

    // Add the new bucket list item to the existing array of objects
    setBucket((prevBucket) => [...prevBucket, item]);
  };

  // Function to mark bucket list item as complete
  const completeBucketItem = (id) => {
    // Create a new array with updated completion status
    const updatedBucket = bucket.map((item) =>
      item.id === id ? { ...item, isComplete: !item.isComplete } : item
    );

    setBucket(updatedBucket);
  };

  // Function to remove bucket list item and update state
  const removeBucketItem = (id) => {
    // Create a new array without the item to be removed
    const updatedBucket = bucket.filter((item) => item.id !== id);

    setBucket(updatedBucket);
  };

  // Function to edit the bucket list item
  const editBucketItem = (itemId, newValue) => {
    // Check if the new value is empty
    if (!newValue.text.trim()) {
      return;
    }

    // Create a new array with the updated item
    const updatedBucket = bucket.map((item) =>
      item.id === itemId ? { ...item, text: newValue.text } : item
    );

    setBucket(updatedBucket);
  };

  return (
    <div>
      <h1>What is on your bucket list?</h1>
      <BucketForm onSubmit={addBucketItem} />
      <Bucket
        bucketItems={bucket} // Change 'bucket' to 'bucketItems'
        completeBucketItem={completeBucketItem}
        removeBucketItem={removeBucketItem}
        editBucketItem={editBucketItem}
      />
    </div>
  );
}

export default BucketList;