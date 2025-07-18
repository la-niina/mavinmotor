import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { CallToActionBlock } from '@/add-ons/CallToAction/Component'
import { ContentBlock } from '@/add-ons/Content/Component'
import { FormBlock } from '@/add-ons/Form/Component'
import { MediaBlock } from '@/add-ons/MediaBlock/Component'
import { MerchantBlock } from './MerchantBlock/Component'
import { ImageGalleryBlock } from './ImageGallery/config'

const blockComponents = {
    content: ContentBlock,
    cta: CallToActionBlock,
    formBlock: FormBlock,
    mediaBlock: MediaBlock,
    merchant: MerchantBlock,
    imageGalleryBlock: ImageGalleryBlock
}

export const RenderBlocks: React.FC<{
    blocks: Page['layout'][0][]
}> = (props) => {
    const { blocks } = props

    const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

    if (hasBlocks) {
        return (
            <Fragment>
                {blocks.map((block, index) => {
                    const { blockType } = block

                    if (blockType && blockType in blockComponents) {
                        const Block = blockComponents[blockType]

                        if (Block) {
                            return (
                                <div className="my-16" key={index}>
                                    {/* @ts-expect-error there may be some mismatch between the expected types here */}
                                    <Block {...block} disableInnerContainer />
                                </div>
                            )
                        }
                    }
                    return null
                })}
            </Fragment>
        )
    }

    return null
}