import React from "react";
interface PostEditPageProps {
    params: {
      id: string;
    };
  }
  
  const EditPost = ({ params }: PostEditPageProps) => {

  return <div className="h-screen bg-gray-200">edit {params.id}</div>;
};

export default EditPost;
