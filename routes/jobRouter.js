import { Router } from 'express'
const router = Router()

import {getAllJobs, getJob, createJob, updateJob, deleteJob} from '../controllers/jobController.js'
import { validateIdParam, validateJobInput } from '../middleware/valitadionMiddleware.js'

router.route('/').get(getAllJobs).post(validateJobInput ,createJob)
router.route('/:id').get(validateIdParam ,getJob).patch(validateIdParam ,validateJobInput, updateJob).delete(validateIdParam, deleteJob)

export default router