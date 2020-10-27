import React, { lazy } from "react";
import { Redirect } from "react-router-dom";

const Overview = lazy(() => import("pages/OverView"));
const Profile = lazy(() => import("pages/Profile"));

const AllPayments = lazy(() => import("pages/Payments/AllPayments"));
const ManualSettlement = lazy(() => import("pages/Payments/ManualSettlement"));
const ReconciledPayments = lazy(() => import("pages/Payments/ReconciledPayments"));
const UnReconciledPayments = lazy(() => import("pages/Payments/UnReconciledPayments"));

const AllOrders = lazy(() => import("pages/Orders/AllOrders"));
const PendingOrders = lazy(() => import("pages/Orders/PendingOrders"));
const ReconciledOrders = lazy(() => import("pages/Orders/ReconciledOrders"));

const routes = [
  {
    path: "/",
    exact: true,
    isPrivate: false,
    component: Overview
  },
  {
    path: "/profile",
    exact: true,
    isPrivate: false,
    component: Profile
  },
  {
    path: "/all-payments",
    exact: true,
    isPrivate: false,
    component: AllPayments
  },
  {
    path: "/manual-settlement",
    exact: true,
    isPrivate: false,
    component: ManualSettlement
  },
  {
    path: "/reconciled-payments",
    exact: true,
    isPrivate: false,
    component: ReconciledPayments
  },
  {
    path: "/unreconciled-payments",
    exact: true,
    isPrivate: false,
    component: UnReconciledPayments
  },
  {
    path: "/all-orders",
    exact: true,
    isPrivate: false,
    component: AllOrders
  },
  {
    path: "/pending-orders",
    exact: true,
    isPrivate: false,
    component: PendingOrders
  },
  {
    path: "/reconciled-orders",
    exact: true,
    isPrivate: false,
    component: ReconciledOrders
  },
  {
    path: "*",
    exact: true,
    isPrivate: false,
    component: () => <Redirect to="/" />
  }
];

export default routes;
