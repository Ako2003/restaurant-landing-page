import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './EmblaCarouselArrowButtons'

import useEmblaCarousel from 'embla-carousel-react'
import Image from "next/image";

type PropType = {
    options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <section className="embla relative">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    <div className="embla__slide flex-none">
                        <Image src={"/images/c837a6_ebf2262d4d7f44b49584ed2483f3778df003.jpg"} alt={"Glasses"}
                               width={647} height={1150}
                               style={{objectFit: 'cover', width: '647px', height: '1150px'}}/>
                    </div>
                    <div className="embla__slide">
                        <div className="flex flex-none flex-col gap-y-4">
                            <div>
                                <Image src={"/images/84770f_21764ad7e259427bbf8c199208e72e22~mv2.jpg"}
                                       alt={"Green glass"} width={651} height={651}
                                       style={{objectFit: 'cover', width: '651px', height: '651px'}}/>
                            </div>
                            <div className="flex gap-x-4">
                                <Image src={"/images/84770f_896f92113e2844b2b6e6f2e90a15c67c~mv2.jpg"}
                                       alt={"Green fruit"} width={322} height={483}
                                       style={{objectFit: 'cover', width: '322px', height: '483px'}}/>
                                <Image src={"/images/84770f_45b7befcb3c24f1c82cd78a5e55f3dbf~mv2.jpg"}
                                       alt={"Pasta"} width={313} height={483}
                                       style={{objectFit: 'cover', width: '313px', height: '483px'}}/>
                            </div>

                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="flex flex-none flex-col gap-y-4">
                            <div className="flex gap-x-4">
                                <Image src={"/images/84770f_9a8e4a1b33284b23b753c85656842e73~mv2.jpg"}
                                       alt={"Green fruit"} width={365} height={457}
                                       style={{objectFit: 'cover', width: '365px', height: '457px'}}/>
                                <Image src={"/images/84770f_cd4562b8297945f8898784ebe4ed3250~mv2.jpg"}
                                       alt={"Pasta"} width={296} height={457}
                                       style={{objectFit: 'cover', width: '296px', height: '457px'}}/>
                            </div>
                            <div>
                                <Image src={"/images/84770f_a84924a406d84a0bbd1110645f8335e5~mv2.jpg"}
                                       alt={"Green glass"} width={677} height={677}
                                       style={{objectFit: 'cover', width: '677px', height: '677px'}}/>
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="flex flex-none flex-col gap-y-4">
                            <div className="flex-none w-[903px]">
                                <Image src={"/images/84770f_bc39d72f44064ceb8b44efbe9f6c04c8~mv2.jpg"}
                                       alt={"Green glass"} width={903} height={602}
                                       style={{objectFit: 'cover', width: '903px', height: '602px'}}/>
                            </div>
                            <div className="flex gap-x-4">
                                <Image src={"/images/84770f_cd34e9c9e8a94bfca20fd332095cb675~mv2.jpg"}
                                       alt={"Green fruit"} width={532} height={532}
                                       style={{objectFit: 'cover', width: '532px', height: '532px'}}/>
                                <Image src={"/images/84770f_9f0bcb3a521541f69a8cde721dd6e447~mv2.jpg"}
                                       alt={"Pasta"} width={355} height={532}
                                       style={{objectFit: 'cover', width: '355px', height: '532px'}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}/>
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled}/>
                </div>
            </div>
        </section>
    )
}

export default EmblaCarousel
