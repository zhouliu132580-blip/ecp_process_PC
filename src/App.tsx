import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  Settings, 
  Plus, 
  Search, 
  Bell, 
  User, 
  ChevronRight, 
  ChevronDown,
  Info,
  ArrowLeft,
  Calendar,
  Filter,
  BarChart3,
  PieChart,
  TrendingUp,
  HelpCircle,
  Download,
  ExternalLink,
  Upload,
  CheckCircle,
  Trash2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
type Page = 'dashboard' | 'process';

// --- Components ---

const Header = ({ onNavigate, currentPage }: { onNavigate: (page: Page) => void, currentPage: Page }) => {
  return (
    <header className="h-12 bg-[#001529] text-white flex items-center justify-between px-4 sticky top-0 z-50">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 font-bold text-lg">
          <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
            <BarChart3 size={16} />
          </div>
          <span>经营数智</span>
        </div>
        <nav className="flex gap-6 text-sm font-medium">
          <button className="text-blue-400 border-b-2 border-blue-400 h-12 px-1">数据报告</button>
          <button className="text-gray-400 hover:text-white transition-colors">我的关注</button>
          <button className="text-gray-400 hover:text-white transition-colors">专题报告</button>
          <button className="text-gray-400 hover:text-white transition-colors flex items-center gap-1">
            常用工具 <ChevronDown size={14} />
          </button>
          <button className="text-gray-400 hover:text-white transition-colors flex items-center gap-1">
            配置管理 <ChevronDown size={14} />
          </button>
          <button className="text-gray-400 hover:text-white transition-colors flex items-center gap-1">
            <span className="bg-orange-500 text-[10px] px-1 rounded-sm mr-1">NEW</span>
            预警任务管理
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">意见反馈</button>
        </nav>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <button className="text-gray-400 hover:text-white flex items-center gap-1 text-sm">
            工具 <ChevronDown size={14} />
          </button>
          <button className="text-gray-400 hover:text-white text-sm">权限中心</button>
          <button className="text-gray-400 hover:text-white text-sm">下载任务</button>
        </div>
        
        <div className="flex items-center gap-3 ml-4">
          <HelpCircle size={18} className="text-gray-400 cursor-pointer hover:text-white" />
          <Bell size={18} className="text-gray-400 cursor-pointer hover:text-white" />
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center text-xs">周</div>
            <User size={18} className="text-gray-400 group-hover:text-white" />
          </div>
        </div>
      </div>
    </header>
  );
};

const Dashboard = ({ onNavigate }: { onNavigate: (page: Page) => void }) => {
  return (
    <div className="flex h-[calc(100vh-48px)] bg-[#f0f2f5]">
      {/* Sidebar */}
      <aside className="w-56 bg-white border-r border-gray-200 flex flex-col overflow-y-auto">
        <div className="p-3">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
            <input 
              type="text" 
              placeholder="请输入报告名称" 
              className="w-full bg-gray-50 border border-gray-200 rounded py-1 pl-8 pr-2 text-xs focus:outline-none focus:border-blue-400"
            />
          </div>
        </div>
        
        <div className="flex-1 text-xs">
          <div className="px-3 py-2 flex items-center gap-2 text-blue-600 bg-blue-50 border-r-2 border-blue-600 font-medium">
            <LayoutDashboard size={14} />
            <span>经营日报</span>
          </div>
          {[
            '业务区健康经...', '分拨区健康经...', 'M线经营看板', '演示空间报表2...', 
            '月表格组件 (...', '推送给组织的...', '月表格组件 (...', 'q323', 
            '2026年2月2日...', '2026年-卡片模...', '组织创建报告', '预算2.0点报告',
            '张灿测试月度...', '收到风', '卡片模式-1126...', '卡片-组织', '报告-个人、组...',
            '综合-报告-岗位', '123', '124', '主题报表测试', '测试不同主题...', '客诉解决处罚...',
            '时点报告监控', '卡片模式日报'
          ].map((item, idx) => (
            <div key={idx} className="px-3 py-2.5 flex items-center justify-between hover:bg-gray-50 cursor-pointer text-gray-600 group">
              <div className="flex items-center gap-2 truncate">
                <FileText size={14} className="text-gray-400" />
                <span className="truncate">{item}</span>
              </div>
              {idx % 5 === 0 && <span className="text-orange-400 opacity-0 group-hover:opacity-100">★</span>}
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="flex bg-white rounded p-0.5 border border-gray-200 shadow-sm text-xs">
              <button className="px-3 py-1 bg-blue-500 text-white rounded-sm">我的报告</button>
              <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-sm">收藏</button>
            </div>
            <div className="flex items-center gap-4 text-sm font-medium border-b border-transparent">
              <button className="text-blue-600 border-b-2 border-blue-600 pb-1">经营概览</button>
              <button className="text-gray-500 hover:text-blue-600 pb-1">组织明细</button>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded px-2 py-1 text-xs">
              <span className="text-gray-400">北京区</span>
              <ChevronDown size={14} className="text-gray-400" />
            </div>
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded px-2 py-1 text-xs w-40">
              <span className="text-gray-300">查询片区网点</span>
              <ChevronDown size={14} className="text-gray-400 ml-auto" />
            </div>
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded px-2 py-1 text-xs">
              <Calendar size={14} className="text-gray-400" />
              <span>2026-03-30</span>
            </div>
            <button className="bg-blue-600 text-white px-4 py-1 rounded text-xs hover:bg-blue-700 transition-colors">查询</button>
            
            <div className="h-6 w-[1px] bg-gray-300 mx-2"></div>
            
            {/* Target Button: 指标新增/变更/退出申请 */}
            <button 
              onClick={() => onNavigate('process')}
              className="flex items-center gap-1.5 bg-orange-50 text-orange-700 hover:bg-orange-100 px-3 py-1.5 rounded-md text-xs font-bold transition-all border border-orange-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
            >
              <TrendingUp size={14} className="text-orange-600" />
              <span>指标新增/变更/退出申请</span>
            </button>
            
            <button className="text-blue-600 hover:bg-blue-50 px-2 py-1 rounded text-xs transition-colors">报告管理</button>
            <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs flex items-center gap-1 hover:bg-blue-700">
              <Plus size={14} />
              <span>新建报告</span>
            </button>
          </div>
        </div>

        {/* Tab Filter */}
        <div className="flex gap-6 text-xs mb-4 border-b border-gray-200 pb-2">
          <button className="text-blue-600 font-bold relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-blue-600">整体</button>
          <button className="text-gray-500 hover:text-blue-600">激活经营</button>
          <button className="text-gray-500 hover:text-blue-600">收入</button>
          <button className="text-gray-500 hover:text-blue-600">利润</button>
          <button className="text-gray-500 hover:text-blue-600">奖罚</button>
          <button className="text-gray-500 hover:text-blue-600">质量</button>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-5 gap-4 mb-6">
          {/* Daily Card */}
          <div className="col-span-1 bg-white rounded-lg border border-gray-100 shadow-sm p-4 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-400"></div>
            <div className="text-blue-500 text-xs font-bold mb-1">2026年</div>
            <div className="text-4xl font-black text-blue-600 mb-1">30</div>
            <div className="text-blue-500 text-xs font-bold">日</div>
          </div>
          
          {/* Metric Cards */}
          <MetricCard title="收入(销售口径)" value="- 万元" subValue="件量: - 票均: -" color="bg-cyan-50" textColor="text-cyan-600" />
          <MetricCard title="利润" value="暂无日度数据" subValue="" color="bg-blue-50" textColor="text-blue-600" />
          <MetricCard title="成本" value="暂无日度数据" subValue="" color="bg-emerald-50" textColor="text-emerald-600" />
          <MetricCard title="奖罚" value="处罚金额: - 环比: -" subValue="处罚票数: - 环比: -" color="bg-indigo-50" textColor="text-indigo-600" />
        </div>

        <div className="grid grid-cols-5 gap-4 mb-6">
          <div className="col-span-1 bg-white rounded-lg border border-gray-100 shadow-sm p-4 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-300"></div>
            <div className="text-blue-400 text-xs font-bold mb-1">2026年</div>
            <div className="text-4xl font-black text-blue-500 mb-1">3</div>
            <div className="text-blue-400 text-xs font-bold">月累计</div>
          </div>
          <MetricCard title="收入(销售口径)" value="- 亿元" subValue="预算目标达成率: --" color="bg-cyan-50/50" textColor="text-cyan-600" />
          <MetricCard title="利润" value="- 万元" subValue="核心税前利润率: -" color="bg-blue-50/50" textColor="text-blue-600" />
          <MetricCard title="成本" value="- 亿元" subValue="经营成本: - 亿元" color="bg-emerald-50/50" textColor="text-emerald-600" />
          <MetricCard title="奖罚" value="处罚金额: - 环比: -" subValue="处罚票数: - 环比: -" color="bg-indigo-50/50" textColor="text-indigo-600" />
        </div>

        {/* Charts Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <span className="font-bold text-sm">收入</span>
              <div className="flex gap-4 text-xs">
                <button className="text-blue-600 border-b border-blue-600">销售口径</button>
                <button className="text-gray-500">寄件口径</button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="text-blue-600 bg-blue-50 px-3 py-1 rounded text-xs flex items-center gap-1">
                <BarChart3 size={14} /> 查看收入结构分析
              </button>
              <button className="text-blue-600 bg-blue-50 px-3 py-1 rounded text-xs flex items-center gap-1">
                <PieChart size={14} /> AI深度总结
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8 h-64">
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold">整体收入趋势</span>
                <div className="flex bg-gray-100 rounded p-0.5 text-[10px]">
                  <button className="px-2 py-0.5 bg-blue-500 text-white rounded-sm shadow-sm">日</button>
                  <button className="px-2 py-0.5 text-gray-500">月</button>
                </div>
              </div>
              <div className="flex-1 bg-gray-50 rounded flex items-center justify-center border border-dashed border-gray-200">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <TrendingUp size={24} className="text-blue-400" />
                  </div>
                  <span className="text-xs text-gray-400">暂无数据</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold">整体件量趋势</span>
                <div className="flex bg-gray-100 rounded p-0.5 text-[10px]">
                  <button className="px-2 py-0.5 bg-blue-500 text-white rounded-sm shadow-sm">日</button>
                  <button className="px-2 py-0.5 text-gray-500">月</button>
                </div>
              </div>
              <div className="flex-1 bg-gray-50 rounded flex items-center justify-center border border-dashed border-gray-200">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <BarChart3 size={24} className="text-blue-400" />
                  </div>
                  <span className="text-xs text-gray-400">暂无数据</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const MetricCard = ({ title, value, subValue, color, textColor }: any) => (
  <div className={`col-span-1 ${color} rounded-lg p-3 flex flex-col justify-between border border-white/50 shadow-sm transition-transform hover:scale-[1.02] cursor-pointer`}>
    <div>
      <div className={`text-[10px] font-bold ${textColor} mb-1 flex items-center gap-1`}>
        {title} <Info size={10} />
      </div>
      <div className="text-lg font-black text-gray-700">{value}</div>
    </div>
    <div className="text-[10px] text-gray-400 mt-2">{subValue}</div>
  </div>
);

const ALL_TYPES = ['指标新增', '指标变更', '指标退出'];

const ProcessForm = ({ onBack }: { onBack: () => void }) => {
  const [applicationTypes, setApplicationTypes] = useState([{ type: '指标新增', count: '1' }]);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = () => {
    setShowSuccess(true);
  };

  const addApplicationType = () => {
    if (applicationTypes.length < ALL_TYPES.length) {
      const usedTypes = applicationTypes.map(at => at.type);
      const nextType = ALL_TYPES.find(t => !usedTypes.includes(t)) || ALL_TYPES[0];
      setApplicationTypes([...applicationTypes, { type: nextType, count: '1' }]);
    }
  };

  const removeApplicationType = (index: number) => {
    const newTypes = [...applicationTypes];
    newTypes.splice(index, 1);
    setApplicationTypes(newTypes);
  };

  const updateApplicationType = (index: number, field: string, value: string) => {
    const newTypes = [...applicationTypes];
    (newTypes[index] as any)[field] = value;
    setApplicationTypes(newTypes);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="min-h-[calc(100vh-48px)] bg-white p-6 overflow-y-auto relative"
    >
      <AnimatePresence>
        {showSuccess && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-lg p-8 max-w-sm w-full flex flex-col items-center text-center shadow-2xl"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">申请成功</h3>
              <p className="text-gray-500 mb-8">您的申请已提交，请耐心等待审核。</p>
              <button 
                onClick={onBack}
                className="w-full py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                回到首页
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb / Back */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-blue-600 mb-6 transition-colors text-sm"
        >
          <ArrowLeft size={16} />
          <span>返回首页</span>
        </button>

        <h1 className="text-xl font-bold text-gray-800 mb-8 pb-4 border-b border-gray-100">
          IT07x经营指标新增/变更/退出申请流程
        </h1>

        {/* Section: 基本信息 */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1 h-4 bg-blue-600 rounded-full"></div>
            <h2 className="font-bold text-gray-800">基本信息</h2>
          </div>
          
          <div className="grid grid-cols-4 gap-x-8 gap-y-6">
            <FormItem label="申请人工号" required value="01386294" />
            <FormItem label="申请人姓名" value="周柳" disabled />
          </div>
        </section>

        {/* Section: 申请类型 */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1 h-4 bg-blue-600 rounded-full"></div>
            <h2 className="font-bold text-gray-800">
              <span className="text-red-500 mr-1">*</span>申请类型
            </h2>
          </div>
          
          <div className="space-y-4 mb-6">
            {applicationTypes.map((item, index) => {
              const availableOptions = ALL_TYPES.filter(t => 
                t === item.type || !applicationTypes.some(at => at.type === t)
              );
              
              return (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-64">
                    <FormItem 
                      type="select" 
                      value={item.type} 
                      onChange={(val: string) => updateApplicationType(index, 'type', val)}
                      options={availableOptions}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input 
                      type="number"
                      min="1"
                      value={item.count}
                      onChange={(e) => {
                        const val = parseInt(e.target.value);
                        if (val >= 1 || e.target.value === '') {
                          updateApplicationType(index, 'count', e.target.value);
                        }
                      }}
                      className="w-20 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-400"
                      placeholder="数量"
                    />
                    <span className="text-sm text-gray-600">个指标</span>
                  </div>
                  {applicationTypes.length > 1 && (
                    <button 
                      onClick={() => removeApplicationType(index)}
                      className="text-red-400 hover:text-red-600 p-1 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>
              );
            })}
            {applicationTypes.length < ALL_TYPES.length && (
              <button 
                onClick={addApplicationType}
                className="flex items-center gap-1 text-blue-600 text-sm hover:text-blue-700 transition-colors mt-2"
              >
                <Plus size={16} />
                <span>添加申请类型</span>
              </button>
            )}
          </div>
        </section>

        {/* Section: 具体信息 */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1 h-4 bg-blue-600 rounded-full"></div>
            <h2 className="font-bold text-gray-800">具体信息</h2>
          </div>
          
          <div className="grid grid-cols-4 gap-x-8 mb-6">
            <div className="col-span-4">
              <FormItem 
                label="申请原因" 
                required 
                type="textarea" 
                placeholder="请说明背景，原因、价值点或解决什么问题"
              />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-x-8">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-gray-500">
                <span className="text-red-500 mr-1">*</span>附件模板
              </label>
              <div className="flex items-center gap-2 text-blue-600 text-sm h-[38px]">
                <FileText size={16} />
                <a href="#" className="underline">指标需求申请模板</a>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-gray-500">
                <span className="text-red-500 mr-1">*</span>上传入口
              </label>
              <div className="flex items-center gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 border border-dashed border-gray-300 rounded px-4 py-[7px] text-sm text-gray-500 hover:border-blue-400 hover:text-blue-500 transition-colors bg-white">
                  <Upload size={16} />
                  <span>点击上传附件</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section: 申请须知 */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1 h-4 bg-blue-600 rounded-full"></div>
            <h2 className="font-bold text-gray-800">申请须知</h2>
          </div>
          
          <div className="bg-blue-50/50 rounded-lg p-6 border border-blue-100">
            <div className="text-xs text-gray-500 space-y-4 leading-relaxed">
              <div className="space-y-2">
                <p>1、如指标变动流程撤销或被驳回后，需要重新进入经营数智新建流程提交；</p>
                <p>2、新增：除【指标编码】外，标*字段为必填字段</p>
                <p>3、变更：全部标*字段为必填字段，科技研发以“指标需求申请模版”最新内容为准，前期已上线的指标内容不再使用</p>
                <p>4、下线：【指标需求】、【指标owner姓名】、【指标owner工号】、【指标编码】、【指标名称】为必填字段，其它标*字段为选填字段</p>
                <p className="mt-4">
                  ECP公文链接：
                  <a 
                    href="https://sf-alidocs.dingtalk.com/i/nodes/pYLaezmVNeY7KpklhmKl32goWrMqPxX6?utm_scene=person_space" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-600 hover:underline inline-flex items-center gap-1"
                  >
                    经营指标数据规范管理制度 <ExternalLink size={12} />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Actions */}
        <div className="flex justify-center gap-4 pt-8 border-t border-gray-100">
          <button 
            onClick={onBack}
            className="px-10 py-2 border border-gray-300 rounded text-gray-600 hover:bg-gray-50 transition-colors"
          >
            取消
          </button>
          <button 
            onClick={handleSubmit}
            className="px-10 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-shadow shadow-lg shadow-blue-200"
          >
            提交申请
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const FormItem = ({ label, value, required, disabled, type = 'input', showModify, options, onChange, placeholder }: any) => (
  <div className="flex flex-col gap-1.5">
    {label && (
      <label className="text-xs text-gray-500">
        {required && <span className="text-red-500 mr-1">*</span>}
        {label}
      </label>
    )}
    <div className="flex items-start gap-2">
      <div className={`flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm flex items-center justify-between relative ${disabled ? 'bg-gray-50 text-gray-400 cursor-not-allowed' : 'bg-white'}`}>
        {type === 'select' && !disabled ? (
          <>
            <select 
              value={value}
              onChange={(e) => onChange?.(e.target.value)}
              className="w-full appearance-none bg-transparent focus:outline-none cursor-pointer pr-8"
            >
              {options?.map((opt: string) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </>
        ) : type === 'textarea' ? (
          <textarea 
            className="w-full bg-transparent focus:outline-none resize-none min-h-[80px] placeholder:text-gray-300"
            placeholder={placeholder}
            defaultValue={value}
          />
        ) : (
          <>
            <span>{value}</span>
            {type === 'select' && <ChevronDown size={14} className="text-gray-400" />}
          </>
        )}
      </div>
      {showModify && (
        <button className="text-blue-500 text-xs border border-blue-500 rounded px-2 py-1 hover:bg-blue-50 mt-1">修改</button>
      )}
    </div>
  </div>
);

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <AnimatePresence mode="wait">
        {currentPage === 'dashboard' ? (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1"
          >
            <Dashboard onNavigate={setCurrentPage} />
          </motion.div>
        ) : (
          <motion.div
            key="process"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1"
          >
            <ProcessForm onBack={() => setCurrentPage('dashboard')} />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Floating Help/Feedback */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 flex flex-col gap-px z-40">
        <div className="bg-white border border-gray-200 p-2 shadow-md cursor-pointer hover:bg-gray-50 flex flex-col items-center gap-1">
          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
            <HelpCircle size={14} className="text-blue-600" />
          </div>
          <span className="text-[10px] text-gray-500 vertical-text">任务预警管理</span>
        </div>
      </div>
    </div>
  );
}
