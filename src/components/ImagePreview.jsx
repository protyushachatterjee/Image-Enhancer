import React from "react";
import Loading from "./Loading";

const ImagePreview = (prop) => {
    return (
        <>
            <div className="grid mt-8 grid-cols-1 md:grid-cols-2 gap-6 w-[50vw] h-64">
                {/* Original Image */}
                <div className="bg-white rounded-xl overflow-hidden ">
                    <h2 className="w-full bg-amber-400 font-semibold text-center text-gray-800 text-xs tracking-tight py-2 border-b-1">
                        Original Image
                    </h2>
                    <div className="w-full h-full">
                        {prop.upload ? (
                            <img
                                src={prop.upload}
                                alt=""
                                className="w-full h-full object-cover "
                            />
                        ) : (
                            <h2 className="text-center text-gray-700 font-thin flex items-center justify-center h-full">
                                No Image Selected
                            </h2>
                        )}
                    </div>
                </div>

                {/* Enhanced Image */}
                <div className="bg-white rounded-xl overflow-hidden">
                    <h2 className="w-full bg-purple-400 font-semibold text-center text-gray-800 text-xs tracking-tight py-2 border-b-1">
                        Enhanced Image
                    </h2>
                    <div className="w-full h-full flex items-center justify-center">
                        {prop.loading ? (
                            <Loading />
                        ) : prop.enchance ? (
                            <img
                                src={prop.enchance}
                                alt=""
                                className="w-full h-full object-cover "
                            />
                        ) : (
                            <h2 className="text-center text-gray-700 font-thin flex items-center justify-center h-full">
                                No Image Selected
                            </h2>
                        )}
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default ImagePreview;
