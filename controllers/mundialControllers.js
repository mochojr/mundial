import httpStatus from '../helpers/httpStatus.js'
import prisma from '../database/prisma.js'


export const mundialController = () => {

    const createMundial = async (req, res, next) => {
        const { equipment, genre } = req.body
        {
            try {
                const mundial = await prisma.mundial.create({
                    data: {
                        equipment,
                        genre
                    }
                })

                return res.status(httpStatus.CREATED).json(mundial)
            } catch (error) {
                next(error)
            }
        }
    }

    const getMundial = async (_req, res, next) => {
        try {
            const mundial = await prisma.mundial.findMany()

            return res.status(httpStatus.OK).json(mundial)
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }
    }

    const getMundialById = async (req, res, next) => {
        const { id } = req.params
        try {
            const mundial = await prisma.mundial.findUnique({
                where: {
                    id: Number(id)
                }
            })

            return res.status(httpStatus.OK).json(mundial)
        } catch (error) {
            next(error)
        }
    }

    const updateMundial = async (req, res, next) => {
        const { id } = req.params
        const { equipment, genre } = req.body
        try {
            const mundial = await prisma.mundial.update({
                where: {
                    id: Number(id)
                },
                data: {
                    equipment,
                    genre
                }
            })

            return res.status(httpStatus.OK).json(mundial)
        } catch (error) {
            next(error)
        }

    }

    const deleteMundial = async (req, res, next) => {
        const { id } = req.params

        try {
            const mundial = await prisma.mundial.delete({
                where: {
                    id: Number(id)
                }
            })

            return res.status(httpStatus.OK).json(mundial)
        } catch (error) {
            next(error)
        }

    }


    return {
        createMundial,
        getMundial,
        getMundialById,
        updateMundial,
        deleteMundial
    }




}