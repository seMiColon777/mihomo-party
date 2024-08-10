import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@nextui-org/react'
import { BaseEditor } from '@renderer/components/base/base-editor'
import React, { useState } from 'react'
interface Props {
  script: string
  onCancel: () => void
  onConfirm: (script: string) => void
}
const PacEditorViewer: React.FC<Props> = (props) => {
  const { script, onCancel, onConfirm } = props
  const [currData, setCurrData] = useState(script)

  return (
    <Modal
      backdrop="blur"
      size="5xl"
      hideCloseButton
      isOpen={true}
      onOpenChange={onCancel}
      scrollBehavior="inside"
    >
      <ModalContent className="h-full w-[calc(100%-100px)]">
        <ModalHeader className="flex">编辑PAC脚本</ModalHeader>
        <ModalBody className="h-full">
          <BaseEditor
            language="javascript"
            value={currData}
            onChange={(value) => setCurrData(value || '')}
          />
        </ModalBody>
        <ModalFooter>
          <Button variant="light" onPress={onCancel}>
            取消
          </Button>
          <Button color="primary" onPress={() => onConfirm(currData)}>
            确认
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default PacEditorViewer
