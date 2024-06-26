import React from "react";
import { MDBBtn, MDBCheckbox } from "mdb-react-ui-kit";
import Box from "@mui/material/Box";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";

const Pin = () => {
  return (
    <div>
      <div className="cd_h1">
        <Box>
          <Box className="fh_startsale">Pin Listing</Box>
          <Box className="sh_startsale">Add Pin Listing And Pay</Box>
        </Box>
        <h1 className="createdeal_h1_pp">Pin Listing</h1>
        <Box className="th_startsalepp">
          <Box>
            <h1 className="pin_listing_h1_pph1">Read Carefully</h1>

            <p1 className="pin_listing_p1">
              Add pin for top searching in every week.<b> 50 to 70 pages </b>
              daily updated in this page that why your listing go bottom in the
              page did not search on top. Price to pin your listing for one week
              -<b>$15</b>. A premium PIN makes your listing even more visible as
              it will always stay at the top of search.
              <br></br>
            </p1>

            <Box className="createdealemail_1">
              <h4 className="create_dealp2">
                Add Information for Top Searching <br></br>
              </h4>
            </Box>
            <Box>
              <div className="DD_pinpage">
                <MDBDropdown>
                  <MDBDropdownToggle className="d1122">BTS</MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>Action</MDBDropdownItem>
                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </div>
              <div className="dd_2pinp">
                <MDBDropdown>
                  <MDBDropdownToggle className="d1122">BTS</MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>Action</MDBDropdownItem>
                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
                <MDBDropdown>
                  <MDBDropdownToggle className="d1122">BTS</MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>Action</MDBDropdownItem>
                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </div>
            </Box>
            <div class="form-outline12" data-mdb-input-init>
              <input type="email" id="typeEmail" class="form-control" />
              <label class="form-labelcdp" for="typeEmail">
                Enter Your Email Adress
              </label>
            </div>
            <div className="d-grid gap-2cdb">
              <MDBBtn className="cd_button_last"> Pay Now</MDBBtn>
            </div>
            <div class="pp_forms121">
              <div class="form-outline_res1" data-mdb-input-init>
                <input type="text" id="typeText" class="form-control" />
                <label class="form-labelcdp" for="typeText">
                  Name
                </label>
              </div>
              <div class="form-outline_res1" data-mdb-input-init>
                <input type="text" id="typeText" class="form-control" />
                <label class="form-labelcdp" for="typeText">
                  Sur Name
                </label>
              </div>
            </div>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Pin;
