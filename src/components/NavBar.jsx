import React from 'react';
import { useState } from 'react';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CNavbar } from '@coreui/react';
import { CContainer } from '@coreui/react';
import { CNavbarBrand } from '@coreui/react';
import { CNavbarToggler } from '@coreui/react';
import { CCollapse } from '@coreui/react';
import { CNavbarNav } from '@coreui/react';
import { CNavItem } from '@coreui/react';
import { CNavLink } from '@coreui/react';
import '../styles/navbar.css';




const navBar=()=> {
  const [visible, setVisible] = useState(false)

  return (
      <>
        <CNavbar expand="xl" colorScheme="light" className="navbar" placement='fixed-top'>
          <CContainer fluid>
            <CNavbarBrand className='namelog' href="#">TastyP</CNavbarBrand>
            <CNavbarToggler
              aria-label="Toggle navigation"
              aria-expanded={visible}
              onClick={() => setVisible(!visible)}
            />
            <CCollapse className="navbar-collapse" visible={visible}>
              <CNavbarNav>
                <CNavItem>
                  <CNavLink href="#" active>
                    Home
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#">Features</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#">Pricing</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#" disabled>
                    Disabled
                  </CNavLink>
                </CNavItem>
              </CNavbarNav>
            </CCollapse>
          </CContainer>
        </CNavbar>
      </>
    )
}

export default navBar;

