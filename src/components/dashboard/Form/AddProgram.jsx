import React from "react";
import SideBar from "../../utils/SideBar";
import Footer from "../../utils/Footer";
import Navbar from "../../utils/Navbar";

const AddProgram = () => {
  return (
    <div>
      <Navbar />
      <div className="main-container" id="container">
        <div className="overlay" />
        <div className="search-overlay" />
        <SideBar />
        <div id="content" class="main-content">
          <div class="container">
            <div class="container">
              <div className="row" style={{display:"flex", justifyContent:"center"}}>
                <div
                  id="flStackForm"
                  className="col-lg-6  layout-spacing layout-top-spacing"
                >
                  <div className="statbox widget box box-shadow">
                    <div className="widget-header">
                      <div className="row">
                        <div className="col-xl-12 col-md-12 col-sm-12 col-12">
                          <h4>Add Program</h4>
                        </div>
                      </div>
                    </div>
                    <div className="widget-content widget-content-area">
                      <form >
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="isTitle"
                            aria-describedby="titleHelp1"
                            placeholder="Enter Title"
                          />
                        </div>
                        <div className="form-group mb-4">
                          <textarea
                            type="description"
                            className="form-control"
                            id="sDescription"
                            placeholder="Description"
                          />
                        </div>
                        
                          <div className="form-group mb-3">
                            <label className="custom-file-container__custom-file">
                              <input
                                type="file"
                                className="custom-file-container__custom-file__custom-file-input"
                                accept="image/*"
                              />
                              {/* <input
                                type="hidden"
                                name="MAX_FILE_SIZE"
                                defaultValue={10485760}
                              /> */}
                              <span className="custom-file-container__custom-file__custom-file-control" />
                            </label>
                            <div className="custom-file-container__image-preview" />
                          
                        </div>

                        <button type="submit" className="btn btn-primary mt-3">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddProgram;
