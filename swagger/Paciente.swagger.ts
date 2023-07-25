/**
 * @swagger
 * paths:
 *   /pacientes:
 *     get:
 *       summary: Obtener el listado de pacientes
 *       responses:
 *         200:
 *           description: JSON con el listado de pacientes
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Paciente'
 *   /crear_paciente:
 *     post:
 *       summary: Crear un nuevo paciente
 *       requestBody:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Paciente'
 *       responses:
 *         200:
 *           description: Paciente creado
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Paciente'
 * components:
 *   schemas:
 *     Paciente:
 *       type: object
 *       properties:
 *         cedula:
 *           type: integer
 *           format: int32
 *         nombre:
 *           type: string
 *         apellido:
 *           type: string
 *         fechaNacimiento:
 *           type: string
 *           format: date-time
 *         telefono:
 *           type: string
 */
export default {};