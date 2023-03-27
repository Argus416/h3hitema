import { isClient, isConnected, isEmployee } from '../middleware/checkAuth';
import { isAdmin } from '../middleware/checkAuth';
import express from "express";
import User from "../Controller/User";
import Chamber from "../Controller/Chamber";
import Reservation from "../Controller/Reservation";
import Auth from "../Controller/Auth";
// import authenticate from '../middleware/authenticate';

const router = express.Router();


router.post("/login" , Auth.login);
router.patch("/logout", Auth.logout);

router.get("/users", User.getAllUsers);
router.post("/user/new",isAdmin, User.createUser);
router.delete("/user/:id", User.deleteUser);
router.patch("/user/:id", User.updateUser);

router.post("/chamber/new", isAdmin ,Chamber.createChamber);
router.get("/chambers", Chamber.getAllChambers);
router.delete("/chamber/:id", isAdmin, Chamber.deleteChamber);
router.patch("/chamber/:id",isAdmin, Chamber.updateChamber);

router.post("/reservation/new",isClient, Reservation.createReservation);
router.post("/reservation/random-new",isClient, Reservation.createRandomReservation);
router.get("/reservations", Reservation.getAllreservations);
router.patch("/reservation/cancel/:id",isClient, Reservation.cancelReservation);
router.delete("/reservation/:id",isAdmin, isEmployee, Reservation.deleteReservation);
router.patch("/reservation/:id",isClient, Reservation.updateReservation);
export default router;