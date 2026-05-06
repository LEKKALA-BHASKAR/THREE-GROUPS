import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import CursorFX from './components/CursorFX.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import ServiceDetail from './pages/ServiceDetail.jsx';
import { IndustriesIndex, IndustryDetail } from './pages/Industries.jsx';
import Process from './pages/Process.jsx';
import { WorkIndex, WorkDetail } from './pages/Work.jsx';
import { JournalIndex, JournalDetail } from './pages/Journal.jsx';
import { CareersIndex, CareerDetail } from './pages/Careers.jsx';
import Contact from './pages/Contact.jsx';
import { Privacy, Terms } from './pages/Legal.jsx';
import NotFound from './pages/NotFound.jsx';

import AdminLayout, { RequireAuth } from './admin/AdminLayout.jsx';
import AdminLogin from './admin/AdminLogin.jsx';
import {
  Dashboard, PagesList, PageEditor,
  JobsList, JobEditor,
  PostsList, PostEditor,
  CasesList, CaseEditor,
  LeadsList,
} from './admin/AdminViews.jsx';

function Public({ children }) { return <Layout>{children}</Layout>; }

export default function App() {
  return (
    <BrowserRouter>
      <CursorFX />
      <Routes>
        {/* Public site */}
        <Route path="/" element={<Public><Home /></Public>} />
        <Route path="/about" element={<Public><About /></Public>} />
        <Route path="/services" element={<Public><Services /></Public>} />
        <Route path="/services/:slug" element={<Public><ServiceDetail /></Public>} />
        <Route path="/industries" element={<Public><IndustriesIndex /></Public>} />
        <Route path="/industries/:slug" element={<Public><IndustryDetail /></Public>} />
        <Route path="/process" element={<Public><Process /></Public>} />
        <Route path="/work" element={<Public><WorkIndex /></Public>} />
        <Route path="/work/:id" element={<Public><WorkDetail /></Public>} />
        <Route path="/journal" element={<Public><JournalIndex /></Public>} />
        <Route path="/journal/:id" element={<Public><JournalDetail /></Public>} />
        <Route path="/careers" element={<Public><CareersIndex /></Public>} />
        <Route path="/careers/:id" element={<Public><CareerDetail /></Public>} />
        <Route path="/contact" element={<Public><Contact /></Public>} />
        <Route path="/privacy" element={<Public><Privacy /></Public>} />
        <Route path="/terms" element={<Public><Terms /></Public>} />

        {/* Admin */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<RequireAuth><AdminLayout /></RequireAuth>}>
          <Route index element={<Dashboard />} />
          <Route path="pages" element={<PagesList />} />
          <Route path="pages/:slug" element={<PageEditor />} />
          <Route path="jobs" element={<JobsList />} />
          <Route path="jobs/:id" element={<JobEditor />} />
          <Route path="posts" element={<PostsList />} />
          <Route path="posts/:id" element={<PostEditor />} />
          <Route path="cases" element={<CasesList />} />
          <Route path="cases/:id" element={<CaseEditor />} />
          <Route path="leads" element={<LeadsList />} />
        </Route>

        <Route path="*" element={<Public><NotFound /></Public>} />
      </Routes>
    </BrowserRouter>
  );
}
