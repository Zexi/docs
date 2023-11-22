import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default function OcbootRun(props) {
  return (
    <div>
      <Tabs>
        <TabItem value="中国大陆" label="中国大陆">
          <CodeBlock
            language="bash">
            {
              `# 直接部署，会从 registry.cn-beijing.aliyuncs.com 拉取容器镜像
./run.py ${props.productVersion} <host_ip>

# 如果遇到 pip 安装包下载过慢的问题，可以用 -m 参数指定 pip 源
# 比如下面使用: https://mirrors.aliyun.com/pypi/simple/ 源
./run.py -m https://mirrors.aliyun.com/pypi/simple/ ${props.productVersion} <host_ip>`
            }
          </CodeBlock>
        </TabItem>
        <TabItem value="其他地区" label="其他地区">
          <p>对于某些网络环境，registry.cn-beijing.aliyuncs.com 访问缓慢或不可达，在版本 <strong>v3.9.5</strong> 之后（含），可指定镜像源: <a href="https://hub.docker.com/u/yunion">docker.io/yunion</a> 来安装。命令如下：</p>
          <CodeBlock language="bash">
            {
              `IMAGE_REPOSITORY=docker.io/yunion ./run.py ${props.productVersion} <host_ip>`
            }
          </CodeBlock>
        </TabItem>
      </Tabs>
    </div>
  )
}
